interface Props {
  label: string;
  isFirst?: boolean;
}

export default function MonthDivider({ label, isFirst = false }: Props) {
  return (
    <div className={`${isFirst ? '' : 'mt-16'} mb-6`}>
      <h2 className="font-serif text-2xl md:text-3xl text-text-primary">{label}</h2>
      <div className="border-t border-border mt-4" />
    </div>
  );
}
