import type { NextPage } from 'next'
import { Table } from '@mantine/core'
import DocEl from '../components/DocEl'

const users = [
  { name: 'Carbon', symbol: 'C', salary: '$150,000', documents: ['Offer.pdf', 'Employment.pdf', 'Assignment.pdf', 'NDA.pdf'] },
  { name: 'Nitrogen', symbol: 'N', salary: '$160,000', documents: ['Offer.pdf', 'Employment.pdf', 'Assignment.pdf', 'NDA.pdf', 'Resume.pdf'] },
  { name: 'Yttrium', symbol: 'Y', salary: '$90,000', documents: ['Offer.pdf', 'Employment.pdf'] }
]

const Home: NextPage = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th style={{width: '10vw'}}>Name</th>
          <th style={{width: '20vw'}}>Symbol</th>
          <th style={{width: '20vw'}}>Salary</th>
          <th style={{width: '50vw'}}>Documents</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.symbol}</td>
            <td>{user.salary}</td>
            <td>
              <DocEl documents={user.documents}/>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Home
