import { Bars } from 'react-loader-spinner';
import './FullLoader.css'
export default function FullLoader() {
    return <main className='full__loader'>
        <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </main>
}