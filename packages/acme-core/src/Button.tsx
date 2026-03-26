export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button type="button" data-testid="button">{props.children}</button>;
}

Button.displayName = "Button";
