import { Group, Menu, Button, Stack } from '@mantine/core'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronIcon } from '@mantine/core'

const useResize = (myRef: any) => {
  const [scrollWidth, setScrollWidth] = useState(0)
  const [offsetWidth, setOffsetWidth] = useState(0)

  const handleResize = useCallback(() => {
    setScrollWidth(myRef.current.scrollWidth)
    setOffsetWidth(myRef.current.offsetWidth)
  }, [myRef])

  useEffect(() => {
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef, handleResize])

  useEffect(() => {
    setScrollWidth(myRef.current.scrollWidth)
    setOffsetWidth(myRef.current.offsetWidth)
  }, [myRef])
  return { scrollWidth, offsetWidth }
}

const DocEl = ({ documents }: { documents: string[] }) => {
  const componentRef = useRef(null)
  const { scrollWidth, offsetWidth } = useResize(componentRef)

  return (
    <>
      <div style={{ width: '50vw', overflow: 'hidden', position: 'relative'}}>
        <Group noWrap={true} ref={componentRef} style={{ visibility: scrollWidth == offsetWidth ? 'visible' : 'hidden' }} >
          {documents.map((doc, idx) => (
            <div key={idx} style={{height: 36, lineHeight: '36px'}}>{doc}</div>
          ))}
        </Group>
        {scrollWidth > offsetWidth && <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <Menu control={<Button rightIcon={<ChevronIcon />} size='sm'>Documents</Button>} style={{maxHeight: 160, overflow: 'scroll'}}>
            <Stack>
              {documents.map((doc, idx) => (
                <div style={{height: 25}} key={idx}>{doc}</div>
              ))}
            </Stack>
          </Menu>
        </div>}
      </div>

    </>
  )
}

export default DocEl;