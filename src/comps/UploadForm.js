import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowedFileTypes = ['image/png', 'image/jpeg'];
  const onChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Error: File type should be png or jpeg');
    }
  };
  return (
    <form>
      <label>
        <input type='file' onChange={onChange} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div>{error}</div>}
        {file && <div>Filename: {file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
