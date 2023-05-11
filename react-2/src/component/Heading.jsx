function Heading({title,desc,sloganEnd,sloganStart,url}) {

    return (
        < >
            <h2>{sloganStart&&(
                <a href={url} className='activeWord'>{sloganStart}</a>
            )} {title} {sloganEnd&&(
                <a href={url} className='activeWord'>{sloganEnd}</a>
            )}</h2>
            <p>
                {desc}
            </p>
        </>
    );
}

export default Heading;
