import { useState, useEffect } from 'react';

function ProgressBar({ parentRef, childSelector }) {
  const [childCount, setChildCount] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calculateProgress = () => {
      if (!parentRef.current) return;

      const parent = parentRef.current
      const children = parent.querySelectorAll(childSelector)
      setChildCount(children.length)

      const viewportHeight = window.innerHeight

      let totalHeight = 0
      let totalVisibleHeight = 0

      children.forEach((child) => {
        const { top, height } = child.getBoundingClientRect()
        totalHeight += height

        if (top <= viewportHeight && top + height >= 0) {
          const visibleTop = Math.max(0, top)
          const visibleBottom = Math.min(viewportHeight, top + height)
          totalVisibleHeight += visibleBottom - visibleTop
        } else if (top + height < 0) {
          totalVisibleHeight += height
        }
      })

      const percentProgress = (totalVisibleHeight / totalHeight) * 100
      setProgress(Math.min(100, Math.max(0, percentProgress)))
    }

    const handleScroll = () => {
      window.requestAnimationFrame(calculateProgress)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    calculateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [parentRef, childSelector])

  const getHighlightedIndex = () => {
    if (progress === 0) return 0
    if (progress >= 100) return childCount - 1
    return Math.floor((progress / 100) * (childCount - 1))
  }

  return (
    <div className="hidden md:flex dfc justify-between w-fit relative isolate" style={{ height: childCount * 50 }}>
      <span
        className="w-0.5 absolute top-0 left-1/2 -translate-x-1/2 bg-blue-500 transition-all duration-200 ease-out z-[-1]"
        style={{ height: `${progress}%` }}
      />
      <span
        className="w-0.5 absolute top-0 left-1/2 h-full -translate-x-1/2 bg-gray-400 transition-all duration-200 ease-out z-[-2]"
      />

      {[...Array(childCount)].map((_, index) => (
        <span
          key={index}
          className={`size-4 rounded-full ${index <= getHighlightedIndex() ? 'bg-blue-500' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  )
}

export default ProgressBar