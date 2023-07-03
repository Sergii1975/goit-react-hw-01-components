import PropTypes from 'prop-types'
import { StatSection, Title, StatList, StatItem, StatLabel, StatPercentage } from './Statistics.styles'

export default function Statistics({ title, stats }) {
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  };
  return (
       <StatSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id} style={{ backgroundColor: generateRandomColor() }}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
    
//     <section class="statistics">
//         <h2 class="title">{ title}</h2>
//       {title && (
//         <ul class="stat-list">
//           {stats.map((stat) => <li class="item" key={stat.id}>
//             <span class="label">{ stat.label}</span>
//             <span class="percentage">{stat.percentage }</span>
//     </li>
//           )}
//     </ul>
//       )}
// </section>
)
}

Statistics.stats = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
).isRequired