// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';

// sections
import {
  OffsetCategories,
  CarbonBalance,
  AppWidgetSummary,
  OffsetsOrigin,
  PlantsFootprint,
} from '../sections/@dashboard/app';
// chart data
import { balanceSeries } from '../components/chart/data';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Carbon Offsets Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Carbon Emissions YTD" total={492} icon={'lucide:factory'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Carbon Offsets YTD" total={496} color="info" icon={'icon-park-outline:sleaves'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Net Balance YTD" total={-4} color="teal" icon={'carbon:crop-growth'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Net Balance 2022" total={16} color="error" icon={'entypo:gauge'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <CarbonBalance
              title="Global Carbon Balance"
              subheader="(-125%) than last year"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
              ]}
              chartData={[
                {
                  name: 'Emissions',
                  type: 'area',
                  fill: 'gradient',
                  data: balanceSeries.emissions,
                },
                {
                  name: 'Offsets',
                  type: 'line',
                  fill: 'solid',
                  data: balanceSeries.offsets,
                },
                {
                  name: 'Net Emissions',
                  type: 'column',
                  fill: 'solid',
                  data: [2, 4, -7, -3, -2, -2, 0, 3, -1, 2, 2, -2],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <OffsetCategories
              title="Offset Categories"
              subheader="Verra Classification"
              chartData={[
                { label: 'Wetlands', value: 4344 },
                { label: 'Reforestation', value: 5435 },
                { label: 'Solar', value: 1443 },
                { label: 'Wind', value: 4443 },
              ]}
              chartColors={[
                theme.palette.chart.blue[0],
                theme.palette.chart.green[0],
                theme.palette.chart.yellow[1],
                theme.palette.chart.green[3],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <PlantsFootprint
              title="Carbon Balance per Location"
              subheader="(-40%) than last year"
              chartData={[
                { label: 'Walldorf', value: 200 },
                { label: 'Bengaluru', value: 130 },
                { label: 'Prague', value: 100 },
                { label: 'Palo Alto', value: 50 },
                { label: 'New Delhi', value: 10 },
                { label: 'Leon-Rot', value: 2 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <OffsetsOrigin
              title="Offsets Origin"
              subheader="Millions CO2 tons"
              chartLabels={['N-America', 'S-America', 'S-Europe', 'N-Europe', 'SE Asia', 'Africa']}
              chartData={[
                { name: 'Walldorf', data: [0, 40, 80, 0, 30, 50] },
                { name: 'Bengaluru', data: [10, 20, 40, 20, 0, 40] },
                { name: 'Prague', data: [20, 0, 40, 15, 0, 25] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>
        </Grid>
      </Container>

  );
}
