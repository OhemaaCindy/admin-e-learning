interface HeaderProps {
  title: string;
  description: string;
}

const AppHeader = ({ title, description }: HeaderProps) => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default AppHeader;
