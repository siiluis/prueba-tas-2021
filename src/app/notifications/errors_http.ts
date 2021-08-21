
const errorsHttpMap: any =  {
  400: 'El servidor no pudo interpretar la solicitud dada una sintaxis inválida.',
  404: 'El servidor no pudo encontrar el contenido solicitado'

}
export const messageResponse = (error:any) => {
  return  errorsHttpMap[error] || error
};
