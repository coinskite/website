import React from 'react'

const list = [
    {
        key: '1',
        src: "/img/home_new/Beneits/1.png",
        title: "Time zones ain't no thing",
        para: "Work seamlessly with our team, no matter your time zone"
    },
    {
        key: '2',
        src: "/img/home_new/Beneits/2.png",
        title: "Impossible? We're on it",
        para: "We tackle the toughest problems with cutting-edge tech "
    },
    {
        key: '3',
        src: "/img/home_new/Beneits/3.png",
        title: "Full spectrum of services",
        para: "Streamline your operations with our comprehensive suite of services "
    },
    {
        key: '4',
        src: "/img/home_new/Beneits/4.png",
        title: "Flexible work terms",
        para: " Find your ideal work-life balance with our flexible working arrangements"
    },

]
function Cards({ src, title, para }) {
    return (
        <div>
            <div>
                <img
                    className=''
                    src={src}
                    alt=''
                />
                <h1>
                    {title}
                </h1>
                <p>
                    {para}
                </p>
            </div>
        </div>

    )
}

function Benefits() {
    return (
        <div>
            <div>
                <h1>Benefits of working with us</h1>
                <div>
                    Discover the Advantages of Collaborating with Our Team
                </div>
                <div>
                    {list.map(l1 => <Cards {...l1} />)}
                </div>
            </div>
        </div>
    )
}

export default Benefits