import { Message } from 'src/constants/models';

export const messages: Message[] = [
  {
    message: 'Tengo un error al iniciar la aplicación',
    userId: 1,
    image: 'https://picsum.photos/200/300',
    name: 'Juan',
    userImage: 'assets/anonim-user.svg',
  },
  {
    message: 'Espero se solucione',
    userId: 1,
    name: 'Juan',
    userImage: 'assets/anonim-user.svg',
  },
  {
    message:
      'Estamos en eso y le avisaremos cuando hayamos solucionado el problema',
    userId: 2,
    name: 'Javier',
    userImage: 'assets/admin-user.jpg',
  },
  {
    message: 'Solucionao',
    userId: 2,
    name: 'Javier',
    userImage: 'assets/admin-user.jpg',
  },
];
