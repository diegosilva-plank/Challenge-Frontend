import { Card } from '../Card'

export const GoToRocketsCard = () => (
  <Card>
    <h2>Go to Rockets to create a launch</h2>
    <div className="btn-div">
      <a href="rockets" style={{ textDecoration: 'none' }}>
        <div className="btn btn-green add-launch-btn">Go to Rockets</div>
      </a>
    </div>
  </Card>
)
