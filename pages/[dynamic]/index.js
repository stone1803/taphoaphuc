import React from 'react'
const DynamicPage = () => {
  return (
    <div>
      <h1>DynamicPage Component</h1>
    </div>
  )
}
export const getStaticProps = async () => {
  return {
    props: {
      dynamic: 'hello',
    },
  }
}
export const getStaticPaths = async () => {
  return {
    paths: [...Array(10000)].map((_, index) => ({
      params: {
        dynamic: `page-${index}`,
      },
    })),
    fallback: false,
  }
}
export default DynamicPage