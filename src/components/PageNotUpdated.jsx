import './PageNotUpdated.css'
import { useNavigate } from 'react-router-dom'
const PageNotUpdated = () => {
    const navigate = useNavigate()

    return (
        <div className="coming-soon">

            <h1>
                Coming Soon!

            </h1>
            <div className="underline"></div>

            <div>
                <button className='btn' onClick={() => navigate('/')}>GO BACK TO HOME PAGE</button>
            </div>


        </div>

    )
}

export default PageNotUpdated