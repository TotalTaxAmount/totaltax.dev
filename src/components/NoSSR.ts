import dynamic from 'next/dynamic'

const NoSsr = (props: any) => (
  props.children
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})
