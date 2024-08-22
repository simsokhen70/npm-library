// src/MyComponent.tsx
import React, { useEffect } from 'react';
var MyComponent = function (_a) {
    var message = _a.message;
    useEffect(function () {
        alert("Hello bong " + message + " !");
    });
    return React.createElement("div", null, message);
};
export default MyComponent;
