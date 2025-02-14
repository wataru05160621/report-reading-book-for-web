import './globals.css';

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col w-5/6 bg-gray-100 mx-auto">
        <h1 className="text-2xl flex justify-start font-bold">読書記録アプリ</h1>

        {/* メインコンテナ */}
        <div className="grid" style={{gridTemplateColumns: "12fr 1fr", gridTemplateRows: "12 1fr" }}>
          {/* 読書記録フォーム */}
          <div>
            <img src="" alt="" />
          </div>
          <div className="">
          </div>

          {/* 読書記録一覧 */}
          <div className="flex flex-col">
            <h2 className="text-xl">読書記録一覧</h2>
            <table>
              <thead>
                <tr>
                  <th>書籍名</th>
                  <th>著者名</th>
                  <th>読了日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>書籍名</td>
                  <td>著者名</td>
                  <td>読了日</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
