import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface CKEditorWrapperProps {
  value: string;
  onChange: (data: string) => void;
}

const CKEditorWrapper: React.FC<CKEditorWrapperProps> = ({ value, onChange }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(_, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      config={{
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'indent',
          'outdent',
          '|',
          'imageUpload',
          'blockQuote',
          'insertTable',
          'mediaEmbed',
          'undo',
          'redo',
        ],
        language: 'ru',
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
            'imageStyle:side',
          ],
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
          ],
        },
      }}
    />
  );
};

export default CKEditorWrapper;
