const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('pt-BR');
};
export default formatDate;
