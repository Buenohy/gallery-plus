import type React from 'react';
import Container from './container';
import Logo from '../assets/images/galeria-plus-full-logo.svg?react';
import { Link, useLocation } from 'react-router';
import cx from 'classnames';
import Button from './button';
import PhotosSearch from './photos-search';
import Divider from './divider';
import PhotoNewDialog from '../contexts/photos/components/photo-new-dialog';
import AlbumNewDialog from '../contexts/albums/components/album-new-dialog';

interface MainHeaderProps extends React.ComponentProps<typeof Container> {}

export default function MainHeader({ className, ...props }: MainHeaderProps) {
  const { pathname } = useLocation();

  return (
    <Container
      as="header"
      className={cx(
        'flex flex-col justify-between md:flex md:flex-row items-center gap-10',
        className,
      )}
      {...props}
    >
      <div className="flex flex-1 justify-between items-center gap-10 w-full min-w-0">
        <Link to="/" className="shrink-0">
          <Logo className="h-5" />
        </Link>

        {pathname === '/' && (
          <>
            <PhotosSearch />
            <Divider orientation="vertical" className="hidden md:flex h-10" />
          </>
        )}
      </div>

      <div className="flex items-center gap-3">
        <PhotoNewDialog trigger={<Button>Nova Foto</Button>} />
        <AlbumNewDialog
          trigger={<Button variant="secondary">Criar álbum</Button>}
        />
      </div>
    </Container>
  );
}
