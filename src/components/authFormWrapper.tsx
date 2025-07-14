import { FormHeader, type FormHeaderProps } from "./header";
import { NavigateLink, type NavigateLinkProps } from "./link";
import { Logo } from "./logo";

export interface AuthFormWrapperProps
  extends FormHeaderProps,
    NavigateLinkProps {
  children: React.ReactNode;
}
export const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  text,
  page,
  href,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <Logo />
      <FormHeader title={title} description={description} />
      {children}
      <div className="mt-6">
        <NavigateLink href={href} text={text} page={page} />
      </div>
    </div>
  );
};
