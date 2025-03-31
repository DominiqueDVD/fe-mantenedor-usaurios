import { useState, useEffect } from "react";

const useDetectToggleChange = (currentValue: boolean) => {
  const [prevValue, setPrevValue] = useState(currentValue);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (prevValue === true && currentValue === false) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    setPrevValue(currentValue);
  }, [currentValue]);

  return { isDisabled };
};

export default useDetectToggleChange;
