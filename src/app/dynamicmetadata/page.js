
const DynamicMetaData = () => {
  return (
    <>
    {/* <title>Dynamic Metadata</title> */}
      <h2>Dynamic Meta Data in Next JS</h2> 
    </>
  )
}

export default DynamicMetaData

export function generateMetadata() {
    return {
       title: 'My First Project',
       description: 'This is my first next js 14 project'
    }
}
