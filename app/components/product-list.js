import Link from 'next/link'
import Image from 'next/image'

export default function ProductList ({item}) {

    return (
        <div className='item'>

            <div 
                style={{
                marginTop: '20px',
                }}
            >

                <Link href={''} >
                    <Image src={item.image} alt={item.name} width={150} height={150} />
                </Link>

                <br></br>
                <br></br>

                <h3>{item.name}</h3>

                <br></br>

                <div
                    style={{
                        minWidth: '200px',
                        minHeight: '100px',
                        margin: '20px',
                        marginTop: '-5px',
                        marginLeft:'15px',
                        marginRight: '15px,'
                    }}
                >
                    <p>
                        {item.description}
                    </p>
                </div>

            </div>

        </div>
    )
}