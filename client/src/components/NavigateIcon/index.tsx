import { LinkWrapper, Link, LinkName } from './styles';

type LinkWrapperProps = {
  children: React.ReactNode
  name: string;
  href: string;
}

export function NavigateIcon({children, href, name}: LinkWrapperProps) {
  return (
    <LinkWrapper>
      <Link href={href}>{children}</Link>
      <LinkName>{name}</LinkName>
    </LinkWrapper>
  )
}