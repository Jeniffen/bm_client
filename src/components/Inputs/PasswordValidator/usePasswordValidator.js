export default function usePasswordValidator({ value = null }) {
  const passwordReq = {
    min: 8,
    numeric: 1,
    symbol: 1,
  };

  const value_ = value === null ? '' : value;

  const numericCount = value_.match(/[0-9]/g)?.length ?? 0;
  const symbolCount = value_.match(/[^a-zA-Z0-9]/g)?.length ?? 0;

  const meetsMin = passwordReq.min && value_.length >= passwordReq.min;
  const meetsNum = numericCount >= passwordReq.numeric;
  const meetsSym = symbolCount >= passwordReq.symbol;

  const msgsMin = `${meetsMin ? '✓' : '✕'} At least 8 characters`;
  const msgNum = `${meetsNum ? '✓' : '✕'} Contains a number`;
  const msgSym = `${meetsSym ? '✓' : '✕'} Contains a symbol`;

  return [meetsMin, meetsNum, meetsSym, msgsMin, msgNum, msgSym];
}
