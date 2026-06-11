/**
 * Code Connect — Pagination
 *
 * Expected Figma component properties:
 *   PagePosition: Default | FirstPage | LastPage | SinglePage
 *   State:        Default | Hover | Focus
 *
 * Note: Pagination is data-driven via `page` + `total` props. The
 * PagePosition variants demonstrate which Prev/Next buttons are disabled
 * given the current page; the State variants demonstrate the interaction
 * state on those buttons.
 */
import figma from '@figma/code-connect';
import { Pagination } from '../../components/navigation/Pagination';

figma.connect(Pagination, 'https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/?node-id=839-30', {
  props: {
    page: figma.enum('PagePosition', {
      Default:    2,
      FirstPage:  1,
      LastPage:   10,
      SinglePage: 1,
    }),
    total: figma.enum('PagePosition', {
      Default:    10,
      FirstPage:  10,
      LastPage:   10,
      SinglePage: 1,
    }),
  },
  example: ({ page, total }) => (
    <Pagination
      page={page}
      total={total}
      onChange={() => {}}
    />
  ),
});
