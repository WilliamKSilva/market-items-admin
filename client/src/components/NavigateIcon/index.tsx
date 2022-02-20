import { LinkWrapper, Link, LinkName } from './styles';

type LinkWrapperProps = {
  children: React.ReactNode
  name: string;
  href: string;
}

export function NavigateIcon({children, href, name}: LinkWrapperProps) {
  return (
    <LinkWrapper href={href}>
      <Link>{children}</Link>
      <LinkName>{name}</LinkName>
    </LinkWrapper>
  )
}