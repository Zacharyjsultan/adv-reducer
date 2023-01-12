import ListItem from './ListItem';

export default function List({ List }) {
  return (
    <ol>
      {List.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ol>
  );
}
