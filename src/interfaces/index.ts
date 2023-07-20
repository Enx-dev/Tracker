interface AuthWrapper {
  children: React.ReactNode;
}

interface BaseButtonProps extends Partial<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  className: string;
}

interface BlobProps extends Partial<SVGAElement> {
  D: string;
  fill: string;
  position?: string;
}
