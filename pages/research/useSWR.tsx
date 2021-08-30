import type { NextPage } from 'next'
import UseSWRTest from '@/organisms/UseSWRTest'

const useSWR: NextPage = () => {
  return (
    <main>
      <UseSWRTest />
      <hr />
      <p>
        複数コンポーネントで同時にリクエストを投げるのでエラーになる。
        <br />
        コメントアウトなどで調整してください。
      </p>
    </main>
  )
}

export default useSWR
