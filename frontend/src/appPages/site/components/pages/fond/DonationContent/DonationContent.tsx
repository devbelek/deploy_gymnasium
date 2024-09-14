"use client";
import { usePostDonationsMutation } from "@/redux/api/fond";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./DonationContent.module.scss";

// Используем интерфейс из пространства имен DONATIONS
type IDonation = DONATIONS.IDonation;

// Создаем отдельный интерфейс для формы
interface IDonationForm {
  amount: string;
  confirmation_file: FileList;
  comment: string;
}

const DonationContent: React.FC = () => {
  const [postDonationsMutation] = usePostDonationsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDonationForm>();

  const onSubmit: SubmitHandler<IDonationForm> = async (data) => {
    const formData = new FormData();
    formData.append("amount", data.amount);
    if (data.confirmation_file.length > 0) {
      formData.append("confirmation_file", data.confirmation_file[0]);
    }
    formData.append("comment", data.comment);

    try {
      const donationData: Partial<IDonation> = {
        amount: data.amount,
        comment: data.comment,
      };

      await postDonationsMutation(donationData as IDonation);
      console.log("Donation sent successfully");
    } catch (error) {
      console.error("Error sending donation:", error);
    }
  };

  return (
    <div className={styles.donationContent}>
      <div className={styles.content}>
        <h2>Сделать пожертвование</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="amount">Сумма (сом):</label>
            <input
              type="number"
              id="amount"
              {...register("amount", { required: "Сумма обязательна" })}
            />
            {errors.amount && (
              <span className={styles.error}>{errors.amount.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmation_file">Квитанция о переводе:</label>
            <input
              type="file"
              id="confirmation_file"
              accept=".pdf,.jpg,.jpeg,.png"
              {...register("confirmation_file", {
                required: "Файл обязателен",
              })}
            />
            {errors.confirmation_file && (
              <span className={styles.error}>
                {errors.confirmation_file.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comment">Комментарий:</label>
            <textarea id="comment" {...register("comment")} />
          </div>

          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationContent;
