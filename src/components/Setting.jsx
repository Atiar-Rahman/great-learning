import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

const Setting = () => {
  useEffect(() => {
    themeChange(false); // Initialize after mount
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Theme Change</h1>
      <select data-choose-theme className="select select-bordered mt-4">
        <option value="light">🌞 Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="cupcake">🧁 Cupcake</option>
      </select>
    </div>
  );
};

export default Setting;
