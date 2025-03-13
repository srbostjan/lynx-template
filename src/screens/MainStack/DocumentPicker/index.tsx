import React, { useState } from 'react';

function DocumentPickerComponent() {
  const [file, setFile] = useState(null);

  const pickDocument = async () => {
  };

  return (
    <view>
      <button onClick={pickDocument} title="Pick a Document" />
      {file && (
        <view>
          <text>File Name: {file.name}</text>
          <text>File Size: {file.size} bytes</text>
          <text>File Type: {file.type}</text>
        </view>
      )}
    </view>
  );
}

export default DocumentPickerComponent;