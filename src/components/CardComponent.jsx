import useFetch from '../hooks/useFetch'
import Residents from './Residents'

const CardComponent = ({ URL }) => {

    const residents = useFetch(URL)


    return (
        <div >
            <Residents key={residents?.id} residents={residents} />
        </div>
    )
}

export default CardComponent