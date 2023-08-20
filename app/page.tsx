'use client';

import {
  Card,
  Metric,
  Text,
  Title,
  BarList,
  Flex,
  Grid,
  CategoryBar,
  Button
} from '@tremor/react';
import Chart from './chart';
import Link from 'next/link';

const data = [
  {
    title: 'まいにち投稿20日続ける',
    amount: 10234,
    data: [10, 10]
  },
  {
    title: 'TOEIC 800点取る',
    amount: 2500,
    data: [60, 40]
  },
  {
    title: '9/20までにアプリをリリースする',
    amount: 2543,
    data: [40, 60]
  }
];

export default function PlaygroundPage() {
  const calcurateWinOdds = (amount: number, loseVote: number) => {
    return Math.floor(amount / loseVote) / 100;
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item, index) => (
          <Link href={`/predict/${item.title}`} key={index}>
            <Card>
              <Title>{item.title}</Title>
              <Flex
                justifyContent="start"
                alignItems="baseline"
                className="space-x-2"
              >
                <Text>覚悟金額: </Text>
                <Metric>{item.amount.toLocaleString()}</Metric>
                <Text>円</Text>
              </Flex>
              <CategoryBar
                values={[...item.data, 100 - (item.data[0] + item.data[1])]}
                colors={['red', 'emerald', 'gray']}
                markerValue={item.data[0]}
                className="mt-3"
              />
              <Button className="mt-3" color="red">
                ダウト × {calcurateWinOdds(item.amount, item.data[0])}
              </Button>
              <Button className="mt-3 ml-2" color="green">
                応援
              </Button>
            </Card>
          </Link>
        ))}
      </Grid>
      {/* <Chart /> */}
    </main>
  );
}
