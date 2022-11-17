interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <section className="bg-gray-300">{children}</section>;
}
