import { useGetMarketListQuery } from '@/infrastructure';

export const MarketPage = () => {
  const { data } = useGetMarketListQuery({
    pageIndex: 0,
    pageSize: 5,
    orderBy: 'createdAt',
    orderDirection: 'asc',
  });

  console.log(data);
  return (
    <div>
      {data?.items.map((item) => (
        <div key={item.id}>
          <p>
            {item.code} - {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};
