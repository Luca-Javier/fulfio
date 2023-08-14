export default class Helpers {
  static getLastTime(time: string): string {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - new Date(time).getTime();
    const diffInMinutes = Math.round(diffInMilliseconds / (1000 * 60));

    //Controlar el width con js y ponerle una clase con estilos mobile

    if (diffInMinutes < 1) return 'Justo ahora';
    else if (diffInMinutes < 60) return `Hace ${diffInMinutes} min`;
    else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `hace ${days} ${days === 1 ? 'día' : 'días'}`;
    }
  }
}

export const getFormData = (data: any): FormData => {
  const formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};
