import React, { useState, useEffect, useRef } from "react";
import { usePostDonationsMutation } from "@/redux/api/fond";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLanguageStore } from "@/stores/useLanguageStore";

interface CreateDonationRequest {
  amount: number;
  confirmation_file: FileList;
  comment?: string;
}

interface ErrorWithResponse extends Error {
  response?: {
    data?: any;
    status?: number;
    headers?: any;
  };
}

const DonationContent: React.FC = () => {
  const [postDonationsMutation] = usePostDonationsMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { isKyrgyz, t } = useLanguageStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateDonationRequest>();

  const watchFile = watch("confirmation_file");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/csrf/`, {
      credentials: "include",
    });
  }, []);

  useEffect(() => {
    if (watchFile && watchFile.length > 0) {
      setSelectedFileName(watchFile[0].name);
    } else {
      setSelectedFileName(null);
    }
  }, [watchFile]);

  const onSubmit: SubmitHandler<CreateDonationRequest> = async (data) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("amount", data.amount.toString());

    const file = data.confirmation_file[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert(
          t(
            "PDF форматындагы файлды тандаңыз.",
            "Пожалуйста, выберите файл в формате PDF."
          )
        );
        setIsLoading(false);
        return;
      }
      formData.append("confirmation_file", file);
    } else {
      alert(t("Файлды тандаңыз.", "Пожалуйста, выберите файл."));
      setIsLoading(false);
      return;
    }

    if (data.comment) {
      formData.append("comment", data.comment);
    }

    try {
      const result = await postDonationsMutation(formData).unwrap();
      alert(t("Ийгиликтүү жөнөтүлдү!", "Успешно отправлено!"));
    } catch (error) {
      console.error("Error sending donation:", error);
      alert(
        t(
          "Жөнөтүүдө ката кетти. Кайра аракет кылыңыз.",
          "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз."
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {t("Акча толуктоо", "Сделать пополнение")}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2" htmlFor="amount">
            {t("Сумма (сом):", "Сумма (сом):")}
          </label>
          <input
            className="w-full p-2 border rounded"
            type="number"
            id="amount"
            step="0.01"
            {...register("amount", {
              required: t("Сумма милдеттүү", "Сумма обязательна"),
              min: {
                value: 0.01,
                message: t(
                  "Сумма 0дөн чоң болушу керек",
                  "Сумма должна быть больше 0"
                ),
              },
              validate: (value) =>
                !isNaN(value) ||
                t("Туура сан киргизиңиз", "Введите корректное число"),
            })}
          />
          {errors.amount && (
            <span className="text-red-500 text-sm">{errors.amount.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-2" htmlFor="confirmation_file">
            {t(
              "Которуу квитанциясы (PDF гана):",
              "Квитанция о переводе (только PDF):"
            )}
          </label>
          <input
            type="file"
            id="confirmation_file"
            accept=".pdf"
            className="hidden"
            {...register("confirmation_file", {
              required: t("Файл милдеттүү", "Файл обязателен"),
            })}
            ref={(e) => {
              register("confirmation_file").ref(e);
              fileInputRef.current = e;
            }}
          />
          <button
            type="button"
            onClick={handleFileButtonClick}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {selectedFileName || t("Файлды тандаңыз", "Выберите файл")}
          </button>
          {errors.confirmation_file && (
            <span className="text-red-500 text-sm">
              {errors.confirmation_file.message}
            </span>
          )}
        </div>

        <div>
          <label className="block mb-2" htmlFor="comment">
            {t("Комментарий:", "Комментарий:")}
          </label>
          <textarea
            className="w-full p-2 border rounded"
            id="comment"
            {...register("comment")}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading
            ? t("Жөнөтүлүүдө...", "Отправка...")
            : t("Жөнөтүү", "Отправить")}
        </button>
      </form>
    </div>
  );
};

export default DonationContent;