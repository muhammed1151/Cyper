interface IButtons {
  name: string;
  background?: string;
  border?: string;
  textColor: string;
}
//default

export const Button = ({ name, background, textColor, border }: IButtons) => {
  return (
    <button
      className={` text-base font-medium px-14 py-4 bg-[${background}] text-[${textColor}]  border-[${border}] border-2  rounded`}
      style={{
        backgroundColor: background,
        color: textColor,
        border: border ? `2px solid ${border}` : undefined,
      }}
    >
      {name}
    </button>
  );
};
// lg
export const ButtonLg = ({ name, background, textColor, border }: IButtons) => {
  return (
    <button
      className={` text-base font-medium px-14 py-4 bg-[${background}] text-[${textColor}]  border-[${border}] border-2  rounded`}
      style={{
        backgroundColor: background,
        color: textColor,
        border: border ? `2px solid ${border} ` : undefined,
        borderRadius: 8,
      }}
    >
      {name}
    </button>
  );
};

// lg icon
export const ButtonLgI = ({
  name,
  background,
  textColor,
  border,
}: IButtons) => {
  return (
    <button
      className={` ptext-base font-medium px-14 py-4 bg-[${background}] text-[${textColor}] border-[${border}] border-2   rounded`}
      style={{
        backgroundColor: background,
        color: textColor,
        border: border ? `2px solid ${border}` : undefined,
      }}
    >
      {name}
      <i className="fa-solid fa-chevron-down"></i>
    </button>
  );
};

// sm
export const ButtonSM = ({ name, background, textColor, border }: IButtons) => {
  return (
    <button
      className={`h-[48px] text-base font-medium px-14 rounded-lg  bg-[${background}] text-[${textColor}] border-[${border}] border-2   rounded`}
      style={{
        backgroundColor: background,
        color: textColor,
        border: border ? `2px solid ${border}` : undefined,
      }}
    >
      {name}
    </button>
  );
};

// sm icon
export const ButtonSMI = ({
  name,
  background,
  textColor,
  border,
}: IButtons) => {
  return (
    <button
      className={` text-base font-medium px-14 py-16  bg-[${background}] ${textColor} rounded-lg  border-[${border}] border-2  rounded`}
      style={{
        backgroundColor: background,
        color: textColor,
        border: border ? `2px solid ${border}` : undefined,
      }}
    >
      {name}
      <img src="/Cyper/public/images/Arrow.png" alt="" />
    </button>
  );
};
