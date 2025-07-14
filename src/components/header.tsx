export interface FormHeaderProps {
  title: string;
  description: string;
}
export const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
