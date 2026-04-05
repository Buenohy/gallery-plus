import Container from '../components/container';
import PhotoList from '../contexts/photos/components/photo-list';

export default function PageHome() {
  return (
    <Container>
      <PhotoList
        photos={[
          {
            id: '123',
            title: 'Olá mundo!',
            imageId: 'portrait-tower.png',
            albums: [
              {
                id: '3421',
                title: 'Album 1',
              },
              {
                id: '123',
                title: 'Album 2',
              },
              {
                id: '456',
                title: 'Album 3',
              },
            ],
          },
          {
            id: '321',
            title: 'Olá mundo!',
            imageId: 'portrait-tower.png',
            albums: [
              {
                id: '3421',
                title: 'Album 1',
              },
              {
                id: '123',
                title: 'Album 2',
              },
              {
                id: '456',
                title: 'Album 3',
              },
            ],
          },
        ]}
      />
    </Container>
  );
}
