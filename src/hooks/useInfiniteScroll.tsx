/* 
@ 인피니티 스크롤
- P : 높은사용자 경험, 하나의 페이지에 모든 컨텐츠 확인가능
- N : 개별아이템 집중 어려움, SEO 적용 어려움, Footer 접근 어려움

@ 인피니트 스크롤을 구현하기위한 핵심적 API => IntersectionObserver
 타겟요소가 화면에 노출되었는지 여부를 구독가능

@ 아래와 같이 사용
 const callback = (entries, observer) => { console.log("Hi") }

 const observer = new IntersectionObserver(callback, options)

 // 타겟 요소 관측 시작
 observer.observe(TargetElement)

 // 타겟 요소 관측 중단
 observer.unobserve(TargetElement)

 // 모든 요소 관측 중단
 observer.disconnect()
 */
import { MutableRefObject, useState, useEffect, useRef, useMemo } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = function (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(1)

  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      observer.disconnect()
    },
  )

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll
