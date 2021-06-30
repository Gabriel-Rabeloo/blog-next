export const formatDate = (date: string): string => {
  const dataObj = new Date(date);
  return dataObj.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};
