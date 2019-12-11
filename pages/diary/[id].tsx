import {useRouter} from 'next/router'

export default function Entry(){
    const router = useRouter();
    return (
        <div>{router.query.id}</div>
    )
}
