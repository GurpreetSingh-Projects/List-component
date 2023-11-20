export default function DessertsList(props) {
  const d = props.data
    .filter((d) => {
      return (d.calories < 500);
    })
    .sort((a, b) => { return a.calories - b.calories })
    .map((d) => { return <li>{d.name}-{d.calories}</li>})
  return (<ul>{d}</ul>);
}
