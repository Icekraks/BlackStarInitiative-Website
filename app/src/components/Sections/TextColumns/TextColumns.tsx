export type TextProps = {
  text: string;
};

const TextColumns: React.FC<TextProps> = ({ text }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-[#fdf6e3] relative py-[24px] px-[16px]"></div>
  );
};

export default TextColumns;
