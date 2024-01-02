const defaultStyle = {
    display: 'flex',
    minHeight: '2em',
    width: '100%',
    flexDirection: 'column',
}

const DefaultBarStyle = {
    height: '1em', 
    backgroundColor: '#eee'
}

const Progress = ({
    style = defaultStyle,
    barStyle = DefaultBarStyle,
    title = 'default title',
    color = '#ff6666',
    persent = 50,
    AddAfter = '',
}) => {

    return (
        <div style={{
            ...style,
        }} >
            <div style={{ height: '1.6em', width: '100%', display: 'flex', alignItems: 'center', margin: '0.1em' }} >
                {title}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }} >
                <div style={{ ...barStyle, width: '100%', backgroundColor: '#eee' }} >
                    <div style={{ ...barStyle, width: `${persent}%`, backgroundColor: color }} />
                </div>
                {AddAfter ?
                    <div style={{ paddingLeft: '0.5em', minWidth: '3em' }} >{AddAfter}</div>
                    :
                    <></>
                }
            </div>

        </div>
    )
}

function Example() {
    return (
        <Progress persent={48} AddAfter="48%" />
    )
}

export default Progress