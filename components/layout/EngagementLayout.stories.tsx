import { useState } from 'react';
import { clsx } from 'clsx';
import type { Meta, StoryObj } from '@storybook/react';
import { TopNav, type TopNavItem } from '../navigation/TopNav';
import { SubToolbar } from '../navigation/SubToolbar';
import { EngagementHeader } from '../data-display/EngagementHeader';
import { RequestStatusColorNav, type RequestSection, type TileStatus } from '../data-display/RequestStatusColorNav';
import { RequestRow, type MetaItem, type StatusIndicator } from '../data-display/RequestRow';
import { Accordion, AccordionItem } from '../data-display/Accordion';
import { RequestDetail } from '../data-display/RequestDetail';
import { MasterDetailLayout } from './MasterDetailLayout';
import { Search } from '../primitives/Search';
import { FilterSwatch } from '../primitives/FilterSwatch';
import { Button } from '../primitives/Button';
import { Avatar } from '../primitives/Avatar';
import { Checkbox } from '../forms/Checkbox';
import { Dropdown } from '../overlay/Dropdown';
import { ActionMenu } from '../overlay/ActionMenu';
import { Tooltip } from '../overlay/Tooltip';
import { Briefcase01Icon } from '../primitives/icons/Briefcase01Icon';
import { UserCircleIcon } from '../primitives/icons/UserCircleIcon';
import { Building07Icon } from '../primitives/icons/Building07Icon';
import { Users01Icon } from '../primitives/icons/Users01Icon';
import { Send03Icon } from '../primitives/icons/Send03Icon';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';
import { Flag02Icon } from '../primitives/icons/Flag02Icon';
import { PlusIcon } from '../primitives/icons/PlusIcon';
import { iconSize } from '../../tokens/iconSizes';

// ─── Shared mock data ────────────────────────────────────────────────────────

const navItems = (active: string): TopNavItem[] => [
  { id: 'my-firm',            label: 'My firm',            icon: Building07Icon,  active: active === 'my-firm'            },
  { id: 'team',               label: 'Team',               icon: Users01Icon,     active: active === 'team'               },
  { id: 'clients',            label: 'Clients',            icon: UserCircleIcon,  active: active === 'clients'            },
  { id: 'engagements',        label: 'Engagements',        icon: Briefcase01Icon, active: active === 'engagements'        },
  { id: 'secure-file-sharing', label: 'Secure File Sharing', icon: Send03Icon,   active: active === 'secure-file-sharing' },
];

const SuralinkLogo = () => (
  <>
    <img src="/suralink-logo.svg"      alt="Suralink" width={134} height={28} className="dark:hidden" />
    <img src="/suralink-logo-dark.svg" alt="Suralink" width={134} height={28} className="hidden dark:block" />
  </>
);

// ─── Single source of truth for all requests ─────────────────────────────────

const SECTION_DEFS = [
  { id: 'general',    navLabel: 'General',              title: 'General / Planning'        },
  { id: 'financial',  navLabel: 'Financial Reporting',  title: 'Financial Reporting'       },
  { id: 'cash',       navLabel: 'Cash',                 title: 'Cash & Banking'            },
  { id: 'ar',         navLabel: 'A/R & Sales',           title: 'A/R & Sales'              },
  { id: 'inventory',  navLabel: 'Inventory',             title: 'Inventory'                },
  { id: 'fixed',      navLabel: 'Fixed Assets',          title: 'Fixed Assets'             },
  { id: 'ap',         navLabel: 'Accounts Pay...',       title: 'Accounts Payable'         },
  { id: 'equity',     navLabel: 'Equity',                title: 'Equity & Long-Term Debt'  },
  { id: 'tax',        navLabel: 'Income Tax',            title: 'Income Taxes'             },
  { id: 'revenue',    navLabel: 'Revenue',               title: 'Revenue & Deferred Rev.'  },
  { id: 'payroll',    navLabel: 'Payroll',               title: 'Payroll & Benefits'       },
  { id: 'it',         navLabel: 'IT & Systems',          title: 'IT & Systems'             },
  { id: 'legal',      navLabel: 'Legal',                 title: 'Legal & Contingencies'    },
  { id: 'prepaid',    navLabel: 'Prepaid',               title: 'Prepaid & Other Assets'   },
  { id: 'accrued',    navLabel: 'Accrued Exp.',          title: 'Accrued Expenses'         },
  { id: 'leases',     navLabel: 'Leases',                title: 'Leases & ROU Assets'      },
  { id: 'goodwill',   navLabel: 'Intangibles',           title: 'Goodwill & Intangibles'   },
  { id: 'interco',    navLabel: 'Intercompany',          title: 'Intercompany Transactions'},
  { id: 'insurance',  navLabel: 'Insurance',             title: 'Insurance'                },
] as const;

interface RequestDef {
  id: string;
  sectionId: string;
  order: number;
  title: string;
  tileStatus: TileStatus;
  rowStatus: StatusIndicator;
  isFlagged?: boolean;
  attachmentLabel?: string;
  description?: string;
  meta?: MetaItem[];
}

const ALL_REQUESTS: RequestDef[] = [
  // ─── General / Planning ──────────────────────────────────────────────────
  { id: 'g1', sectionId: 'general',   order: 1,  title: 'Inquiries',                description: 'Answers to initial engagement questionnaire items from the audit team',                          tileStatus: 'fulfilled',   rowStatus: 'accepted',  attachmentLabel: 'Firm provided 3 files', meta: [{ type: 'due-date', date: '03/15/2025' }, { type: 'documents', count: 12, unread: true, dot: 'unread' as const }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'g2', sectionId: 'general',   order: 2,  title: 'CEO Initial Inquiries',    description: 'Executive-level responses to audit inquiries directed to the CEO',                               tileStatus: 'outstanding', rowStatus: 'fulfilled', isFlagged: true, attachmentLabel: 'Firm provided 2 files', meta: [{ type: 'e-signature' }, { type: 'due-date', date: '04/18/2025' }, { type: 'comments', count: 2, unread: true, dot: 'unread' as const }, { type: 'documents', count: 3, unread: true, dot: 'attention' as const }] },
  { id: 'g3', sectionId: 'general',   order: 3,  title: 'CFO Initial Inquiries',    description: 'Procedures and process documentation regarding IT general controls',                              tileStatus: 'outstanding', rowStatus: 'fulfilled', attachmentLabel: 'Firm provided 8 files', meta: [{ type: 'due-date', date: '04/18/2025' }, { type: 'comments', count: 2, unread: true, dot: 'unread' as const }] },
  { id: 'g4', sectionId: 'general',   order: 4,  title: 'Employee Schedule',        description: 'Current headcount listing including roles, departments, and hire dates',                         tileStatus: 'fulfilled',   rowStatus: 'accepted',  attachmentLabel: 'Firm provided 2 files', meta: [{ type: 'due-date', date: '03/20/2025' }, { type: 'documents', count: 8 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'g5', sectionId: 'general',   order: 5,  title: 'Prior Year Audit Report',  description: 'Final signed audit report and management letter from the prior year engagement',                 tileStatus: 'overdue',     rowStatus: 'returned',  attachmentLabel: 'Firm provided 1 file', meta: [{ type: 'due-date', date: '03/28/2025' }, { type: 'comments', count: 1, unread: true }, { type: 'documents', count: 4, unread: true, dot: 'unread' as const }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'g6', sectionId: 'general',   order: 6,  title: 'Engagement Letter',        description: 'Signed engagement letter confirming audit scope, fees, and expected timeline',                   tileStatus: 'not-started', rowStatus: 'outstanding', meta: [{ type: 'due-date', date: '04/01/2025' }] },

  // ─── Financial Reporting ─────────────────────────────────────────────────
  { id: 'f1',  sectionId: 'financial', order: 7,  title: 'Legal Expenses',                                 description: 'Detail of all legal fees expensed during the fiscal year by matter',                        tileStatus: 'fulfilled',   rowStatus: 'accepted',  isFlagged: true, meta: [{ type: 'due-date', date: '04/18/2025' }, { type: 'comments', count: 2, unread: true, dot: 'unread' as const }] },
  { id: 'f2',  sectionId: 'financial', order: 8,  title: 'BOD Minutes',                                    description: 'Board of directors meeting minutes for all sessions held during the year',                  tileStatus: 'not-started', rowStatus: 'outstanding', meta: [{ type: 'due-date', date: '02/18/2025' }] },
  { id: 'f3',  sectionId: 'financial', order: 9,  title: 'Officer & Director List',                        description: 'Current list of all officers and directors with title and compensation detail',              tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'f4',  sectionId: 'financial', order: 10, title: 'Control Environment Questionnaire',              description: 'Management responses to the internal control environment assessment',                        tileStatus: 'not-started', rowStatus: 'outstanding', isFlagged: true },
  { id: 'f5',  sectionId: 'financial', order: 11, title: 'IT General Controls Process',                    description: 'Documentation of ITGC covering access management, change control, and operations',           tileStatus: 'fulfilled',   rowStatus: 'accepted',  attachmentLabel: 'Firm provided 5 files', meta: [{ type: 'due-date', date: '04/02/2025' }, { type: 'documents', count: 22 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'f6',  sectionId: 'financial', order: 12, title: 'Consolidated Balance Sheet',                     description: 'Audited consolidated balance sheet as of fiscal year-end with comparative period',           tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'f7',  sectionId: 'financial', order: 13, title: 'Consolidated Statement of Operations',           description: 'Full-year consolidated income statement with prior period comparative columns',              tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'f8',  sectionId: 'financial', order: 14, title: "Consolidated Statement of Shareholders' Equity", description: 'Statement of changes in stockholders equity for the current audit period',                   tileStatus: 'not-started', rowStatus: 'outstanding', isFlagged: true },
  { id: 'f9',  sectionId: 'financial', order: 15, title: 'Consolidated Statement of Cash Flows',           description: 'Indirect method cash flow statement reconciling net income to operating cash flows',         tileStatus: 'not-started', rowStatus: 'outstanding', isFlagged: true },
  { id: 'f10', sectionId: 'financial', order: 16, title: 'Draft Financial Statements',                     description: 'Complete draft financial statement package provided for auditor review and comment',         tileStatus: 'fulfilled',   rowStatus: 'accepted',  isFlagged: true, attachmentLabel: 'Firm provided 8 files', meta: [{ type: 'due-date', date: '04/18/2025' }, { type: 'comments', count: 2, unread: true }, { type: 'documents', count: 3, unread: true, dot: 'unread' as const }] },
  { id: 'f11', sectionId: 'financial', order: 17, title: 'Notes to Financial Statements',                  description: 'All footnote disclosures supporting the financial statements per GAAP requirements',         tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Cash & Banking ──────────────────────────────────────────────────────
  { id: 'c1', sectionId: 'cash',      order: 18, title: 'Bank Statements — Q1',           description: 'Monthly bank statements for all accounts covering January through March',                tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'c2', sectionId: 'cash',      order: 19, title: 'Bank Statements — Q2',           description: 'Monthly bank statements for all accounts covering April through June',                   tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'c3', sectionId: 'cash',      order: 20, title: 'Bank Reconciliation Statements', description: 'Reconciliation of book cash balances to bank statement balances at period end',          tileStatus: 'overdue',     rowStatus: 'returned',   meta: [{ type: 'due-date', date: '04/15/2025' }, { type: 'comments', count: 2, unread: true }, { type: 'documents', count: 17, unread: true, dot: 'unread' as const }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'c4', sectionId: 'cash',      order: 21, title: 'Petty Cash Records',             description: 'Petty cash fund log and receipts supporting all disbursements during the year',         tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'c5', sectionId: 'cash',      order: 22, title: 'Cash Flow Summary',              description: 'Management-prepared summary of cash inflows and outflows by major category',            tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'c6', sectionId: 'cash',      order: 23, title: 'Outstanding Checks Report',      description: 'Checks issued but not yet cleared as of the balance sheet date',                        tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'c7', sectionId: 'cash',      order: 24, title: 'Deposits in Transit',            description: 'Deposits recorded in the books but not yet posted by the bank at period end',           tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── A/R & Sales ─────────────────────────────────────────────────────────
  { id: 'a1', sectionId: 'ar',        order: 25, title: 'Accounts Receivable Aging Report', description: 'A/R aging by customer with balances bucketed by days outstanding at period end',     tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'a2', sectionId: 'ar',        order: 26, title: 'Sales Journal — Q1',               description: 'Detailed sales transaction journal for the first quarter of the fiscal year',        tileStatus: 'outstanding', rowStatus: 'fulfilled',  attachmentLabel: 'Firm provided 4 files', meta: [{ type: 'due-date', date: '04/20/2025' }, { type: 'comments', count: 1 }, { type: 'documents', count: 31 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'a3', sectionId: 'ar',        order: 27, title: 'Customer Contracts',               description: 'Executed contracts for significant customers underlying revenue recognition',         tileStatus: 'overdue',     rowStatus: 'returned',   meta: [{ type: 'due-date', date: '03/25/2025' }, { type: 'comments', count: 3 }, { type: 'documents', count: 5 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'a4', sectionId: 'ar',        order: 28, title: 'Revenue Recognition Schedule',     description: 'Schedule supporting ASC 606 revenue recognition conclusions by contract type',       tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'a5', sectionId: 'ar',        order: 29, title: 'Bad Debt Expense Analysis',        description: 'Methodology and calculation supporting the allowance for doubtful accounts',         tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'a6', sectionId: 'ar',        order: 30, title: 'Credit Memos Issued',              description: 'Log of all credit memos issued to customers with supporting approval documentation', tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'a7', sectionId: 'ar',        order: 31, title: 'Returns & Allowances',             description: 'Summary of product returns and sales allowances granted to customers during the year', tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'a8', sectionId: 'ar',        order: 32, title: 'Sales Tax Returns',                description: 'Filed state and local sales tax returns for all applicable jurisdictions',           tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'a9', sectionId: 'ar',        order: 33, title: 'Top 10 Customer Listing',          description: 'Revenue concentration analysis showing top 10 customers and percentage of total',    tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Inventory ───────────────────────────────────────────────────────────
  { id: 'i1', sectionId: 'inventory', order: 34, title: 'Inventory Count Sheets',          description: 'Physical count observation sheets signed by both client and auditor representatives', tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'i2', sectionId: 'inventory', order: 35, title: 'Inventory Valuation Report',      description: 'Cost layer detail and valuation methodology documentation by inventory category',     tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'i3', sectionId: 'inventory', order: 36, title: 'Inventory Rollforward',           description: 'Reconciliation of beginning to ending inventory balances by product category',        tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 3 files', meta: [{ type: 'due-date', date: '04/10/2025' }, { type: 'documents', count: 18 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'i4', sectionId: 'inventory', order: 37, title: 'Slow-Moving Inventory Analysis',  description: 'Aging analysis identifying items with low turnover rates or obsolescence risk',       tileStatus: 'fulfilled',   rowStatus: 'accepted',   meta: [{ type: 'due-date', date: '04/08/2025' }, { type: 'documents', count: 7 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'i5', sectionId: 'inventory', order: 38, title: 'Purchase Orders — Q1',            description: 'Purchase orders issued to suppliers during Q1 with approval and receipt evidence',    tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'i6', sectionId: 'inventory', order: 39, title: 'Vendor Invoices',                 description: 'Vendor invoices supporting cost of goods sold and inventory additions in the period',  tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'i7', sectionId: 'inventory', order: 40, title: 'Receiving Reports',               description: 'Signed receiving documents confirming inventory received from vendors',                tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'i8', sectionId: 'inventory', order: 41, title: 'Physical Inventory Observation',  description: 'Auditor observation memo and reconciliation of count sheets to perpetual records',    tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Fixed Assets ────────────────────────────────────────────────────────
  { id: 'fa1', sectionId: 'fixed',    order: 42, title: 'Fixed Asset Schedule',            description: 'Complete fixed asset listing with cost, accumulated depreciation, and net book value', tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'fa2', sectionId: 'fixed',    order: 43, title: 'Depreciation Schedule',           description: 'Asset-level depreciation schedule with method, useful life, and current period expense', tileStatus: 'fulfilled',   rowStatus: 'accepted',  attachmentLabel: 'Firm provided 4 files', meta: [{ type: 'due-date', date: '04/05/2025' }, { type: 'documents', count: 34 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'fa3', sectionId: 'fixed',    order: 44, title: 'Capital Expenditure Detail',      description: 'Detail of all capital additions during the year with approval and classification',      tileStatus: 'fulfilled',   rowStatus: 'accepted',  meta: [{ type: 'due-date', date: '04/07/2025' }, { type: 'documents', count: 15 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'fa4', sectionId: 'fixed',    order: 45, title: 'Asset Disposal Documentation',    description: 'Proceeds, net book value, and gain or loss on assets disposed during the period',      tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'fa5', sectionId: 'fixed',    order: 46, title: 'Lease Agreements',                description: 'All lease agreements in effect, supporting ROU asset and lease liability schedules',    tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'fa6', sectionId: 'fixed',    order: 47, title: 'Property Insurance Certificates', description: 'Current insurance certificates covering all significant fixed asset property',          tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Accounts Payable ────────────────────────────────────────────────────
  { id: 'ap1', sectionId: 'ap',       order: 48, title: 'Accounts Payable Aging Report',   description: 'A/P aging by vendor with balances bucketed by days outstanding at period end',        tileStatus: 'overdue',     rowStatus: 'returned',   isFlagged: true, meta: [{ type: 'due-date', date: '04/15/2025' }] },
  { id: 'ap2', sectionId: 'ap',       order: 49, title: 'Vendor Statements',               description: 'Vendor-issued statements reconciled to the accounts payable sub-ledger balances',      tileStatus: 'outstanding', rowStatus: 'fulfilled',  attachmentLabel: 'Firm provided 6 files', meta: [{ type: 'due-date', date: '04/22/2025' }, { type: 'documents', count: 21 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'ap3', sectionId: 'ap',       order: 50, title: 'Purchase Commitments',            description: 'Disclosure of significant purchase commitments and open purchase orders outstanding',  tileStatus: 'outstanding', rowStatus: 'fulfilled',  meta: [{ type: 'due-date', date: '04/25/2025' }, { type: 'comments', count: 2 }, { type: 'documents', count: 8 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'ap4', sectionId: 'ap',       order: 51, title: 'Expense Reports',                 description: 'Approved employee expense reports and reimbursement payments made during the year',    tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ap5', sectionId: 'ap',       order: 52, title: 'Accrued Liabilities Schedule',    description: 'Detail of accrued liabilities balance with support for each significant line item',   tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ap6', sectionId: 'ap',       order: 53, title: 'Related Party Transactions',      description: 'Disclosure of all transactions with related parties conducted during the audit period', tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Equity & Long-Term Debt ─────────────────────────────────────────────
  { id: 'eq1', sectionId: 'equity',   order: 54, title: 'Stockholders Equity Rollforward',        description: 'Rollforward of all equity components from beginning to ending balances',                  tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'eq2', sectionId: 'equity',   order: 55, title: 'Stock Compensation Schedule',            description: 'Equity award activity, fair value inputs, and stock-based compensation expense roll',     tileStatus: 'outstanding', rowStatus: 'fulfilled',  attachmentLabel: 'Firm provided 3 files', meta: [{ type: 'due-date', date: '04/20/2025' }, { type: 'comments', count: 1 }, { type: 'documents', count: 43 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'eq3', sectionId: 'equity',   order: 56, title: 'Long-Term Debt Schedule',                description: 'Detail of all debt instruments including principal, interest terms, and maturity dates',   tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 6 files', meta: [{ type: 'e-signature' }, { type: 'due-date', date: '04/12/2025' }, { type: 'documents', count: 28 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'eq4', sectionId: 'equity',   order: 57, title: 'Debt Covenant Compliance Certificate',   description: 'Management certification of compliance with all financial and non-financial debt covenants', tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'eq5', sectionId: 'equity',   order: 58, title: 'Loan Agreements & Amendments',           description: 'Original loan agreements and all executed amendments during the audit period',             tileStatus: 'overdue',     rowStatus: 'returned',   isFlagged: true, meta: [{ type: 'due-date', date: '04/10/2025' }] },
  { id: 'eq6', sectionId: 'equity',   order: 59, title: 'Treasury Stock Activity',                description: 'Share repurchase activity detail including transaction dates, share counts, and cost',     tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Income Taxes ────────────────────────────────────────────────────────
  { id: 'tx1', sectionId: 'tax',      order: 60, title: 'Federal & State Tax Returns',            description: 'Filed federal and all state income tax returns for the most recently completed year',     tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'tx2', sectionId: 'tax',      order: 61, title: 'Deferred Tax Asset / Liability Schedule', description: 'Deferred tax schedule by temporary difference with valuation allowance analysis',        tileStatus: 'outstanding', rowStatus: 'fulfilled',  attachmentLabel: 'Firm provided 5 files', meta: [{ type: 'due-date', date: '04/22/2025' }, { type: 'documents', count: 16 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'tx3', sectionId: 'tax',      order: 62, title: 'Income Tax Provision Workpaper',          description: 'Detailed workpaper reconciling book income to taxable income with rate reconciliation',  tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'tx4', sectionId: 'tax',      order: 63, title: 'Open Tax Audit Correspondence',           description: 'Active IRS or state tax examination notices, IDRs, and all related correspondence',      tileStatus: 'overdue',     rowStatus: 'returned',   isFlagged: true, meta: [{ type: 'due-date', date: '03/15/2025' }, { type: 'comments', count: 4 }, { type: 'documents', count: 7 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'tx5', sectionId: 'tax',      order: 64, title: 'R&D Tax Credit Documentation',            description: 'Qualified research activity support and calculation workpaper for R&D tax credit',       tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'tx6', sectionId: 'tax',      order: 65, title: 'Transfer Pricing Documentation',          description: 'Contemporaneous transfer pricing analysis and inter-company pricing documentation',      tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 7 files', meta: [{ type: 'due-date', date: '04/14/2025' }, { type: 'documents', count: 41 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },

  // ─── Revenue & Deferred Revenue ──────────────────────────────────────────
  { id: 'rv1', sectionId: 'revenue',  order: 66, title: 'Revenue Recognition Policy',            description: 'Accounting policy memo documenting ASC 606 adoption, methodology, and application',       tileStatus: 'fulfilled',   rowStatus: 'accepted',   meta: [{ type: 'due-date', date: '03/30/2025' }, { type: 'documents', count: 9 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'rv2', sectionId: 'revenue',  order: 67, title: 'Deferred Revenue Schedule',             description: 'Rollforward of contract liabilities by revenue stream at the end of the period',          tileStatus: 'outstanding', rowStatus: 'fulfilled',  attachmentLabel: 'Firm provided 3 files', meta: [{ type: 'due-date', date: '04/18/2025' }, { type: 'comments', count: 2 }, { type: 'documents', count: 26 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'rv3', sectionId: 'revenue',  order: 68, title: 'Contract Liability Rollforward',        description: 'Beginning to ending reconciliation of deferred revenue by individual contract type',       tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'rv4', sectionId: 'revenue',  order: 69, title: 'Significant Customer Contracts',        description: 'Executed agreements for top revenue relationships highlighting key contract terms',        tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'rv5', sectionId: 'revenue',  order: 70, title: 'Variable Consideration Analysis',       description: 'Estimation methodology and amounts of variable consideration included in transaction price', tileStatus: 'overdue',   rowStatus: 'returned',   meta: [{ type: 'due-date', date: '04/08/2025' }, { type: 'comments', count: 1 }, { type: 'documents', count: 11 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'rv6', sectionId: 'revenue',  order: 71, title: 'Refund & Return Reserve Calculation',   description: 'Methodology and estimate supporting the refund liability and return reserve accrual',      tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'rv7', sectionId: 'revenue',  order: 72, title: 'Subscription Billing Detail',           description: 'Detailed billing records and renewal schedules supporting recurring subscription revenue', tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Payroll & Benefits ──────────────────────────────────────────────────
  { id: 'pr1', sectionId: 'payroll',  order: 73, title: 'Payroll Register — Full Year',          description: 'Complete annual payroll register by employee showing gross pay and net disbursements',     tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 8 files', meta: [{ type: 'e-signature' }, { type: 'due-date', date: '04/03/2025' }, { type: 'documents', count: 52 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'pr2', sectionId: 'payroll',  order: 74, title: 'W-2 / 1099 Summary',                   description: 'Summary of all W-2 and 1099 filings reconciled to total payroll expense in the ledger',   tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'pr3', sectionId: 'payroll',  order: 75, title: 'Benefit Plan Audit Report',             description: 'Completed Form 5500 or independent benefit plan audit report for the plan year',          tileStatus: 'outstanding', rowStatus: 'fulfilled',  attachmentLabel: 'Firm provided 2 files', meta: [{ type: 'due-date', date: '04/25/2025' }, { type: 'documents', count: 19 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'pr4', sectionId: 'payroll',  order: 76, title: 'Executive Compensation Schedule',       description: 'Total compensation detail for all named executive officers including base and incentive',  tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'pr5', sectionId: 'payroll',  order: 77, title: 'PTO Accrual Calculation',               description: 'Methodology and year-end calculation supporting the accrued vacation and PTO liability',  tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'pr6', sectionId: 'payroll',  order: 78, title: 'Terminations & New Hire Listing',       description: 'Detail of all employee terminations and new hires with effective dates and positions',     tileStatus: 'overdue',     rowStatus: 'returned',   isFlagged: true, meta: [{ type: 'due-date', date: '03/20/2025' }, { type: 'documents', count: 3 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },

  // ─── IT & Systems ────────────────────────────────────────────────────────
  { id: 'it1', sectionId: 'it',       order: 79, title: 'IT General Controls Assessment',        description: 'Assessment of entity-level and ITGC effectiveness across key financial reporting systems', tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 3 files', meta: [{ type: 'due-date', date: '04/09/2025' }, { type: 'documents', count: 16 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'it2', sectionId: 'it',       order: 80, title: 'User Access Review — ERP',              description: 'Periodic user access certification and segregation of duties review for the primary ERP',  tileStatus: 'outstanding', rowStatus: 'fulfilled',  meta: [{ type: 'due-date', date: '04/18/2025' }, { type: 'comments', count: 1 }, { type: 'documents', count: 38 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'it3', sectionId: 'it',       order: 81, title: 'Change Management Log',                 description: 'Log of all application change requests, approvals, and deployments during the year',       tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'it4', sectionId: 'it',       order: 82, title: 'Backup & Recovery Policy',              description: 'Current data backup procedures, frequency schedules, and recovery time objectives',        tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'it5', sectionId: 'it',       order: 83, title: 'Cybersecurity Incident Log',            description: 'Record of all security incidents, breach notifications, and remediation actions taken',    tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Legal & Contingencies ───────────────────────────────────────────────
  { id: 'lg1', sectionId: 'legal',    order: 84, title: 'Attorney Representation Letter',        description: 'Legal counsel response letter confirming all known litigation and contingent liabilities',  tileStatus: 'not-started', rowStatus: 'outstanding', isFlagged: true },
  { id: 'lg2', sectionId: 'legal',    order: 85, title: 'Litigation Summary',                   description: 'Management summary of all pending or threatened legal proceedings and expected exposure',    tileStatus: 'overdue',     rowStatus: 'returned',   isFlagged: true, meta: [{ type: 'due-date', date: '04/05/2025' }, { type: 'comments', count: 5 }, { type: 'documents', count: 9 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'lg3', sectionId: 'legal',    order: 86, title: 'Warranty Reserve Calculation',         description: 'Estimate methodology and rollforward of warranty reserve supported by historical claims',   tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'lg4', sectionId: 'legal',    order: 87, title: 'Regulatory Compliance Certificates',   description: 'Current licenses, operating permits, and regulatory compliance certifications in effect',   tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 2 files', meta: [{ type: 'e-signature' }, { type: 'due-date', date: '04/02/2025' }, { type: 'documents', count: 11 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'lg5', sectionId: 'legal',    order: 88, title: 'Environmental Liability Assessment',   description: 'Third-party or management assessment of remediation obligations and environmental exposure', tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Prepaid & Other Assets ──────────────────────────────────────────────
  { id: 'pp1', sectionId: 'prepaid',  order: 89, title: 'Prepaid Expense Schedule',             description: 'Listing of all prepaid balances with amortization schedules and expiration dates',          tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 2 files', meta: [{ type: 'due-date', date: '04/04/2025' }, { type: 'documents', count: 6 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'pp2', sectionId: 'prepaid',  order: 90, title: 'Deposits & Other Receivables',         description: 'Detail of security deposits, refundable amounts, and miscellaneous receivable balances',    tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'pp3', sectionId: 'prepaid',  order: 91, title: 'Notes Receivable Detail',              description: 'Note terms, outstanding principal balances, and collectibility assessment for each note',    tileStatus: 'outstanding', rowStatus: 'fulfilled',  meta: [{ type: 'due-date', date: '04/20/2025' }, { type: 'documents', count: 14 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'pp4', sectionId: 'prepaid',  order: 92, title: 'Investment in Subsidiaries Schedule',  description: 'Equity method investment rollforward and subsidiary financial information summaries',        tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Accrued Expenses ────────────────────────────────────────────────────
  { id: 'ac1', sectionId: 'accrued',  order: 93, title: 'Accrued Expenses Rollforward',         description: 'Beginning to ending rollforward of all significant accrued liabilities by category',        tileStatus: 'outstanding', rowStatus: 'fulfilled',  attachmentLabel: 'Firm provided 4 files', meta: [{ type: 'due-date', date: '04/18/2025' }, { type: 'comments', count: 1 }, { type: 'documents', count: 23 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'ac2', sectionId: 'accrued',  order: 94, title: 'Bonus Accrual Calculation',            description: 'Year-end bonus accrual calculation with board approval and payout documentation',           tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ac3', sectionId: 'accrued',  order: 95, title: 'Commission Accrual Workpaper',         description: 'Earned but unpaid commission calculation broken down by individual sales representative',    tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ac4', sectionId: 'accrued',  order: 96, title: 'Restructuring Reserve Documentation',  description: 'Restructuring plan approval, charge detail, and reserve activity rollforward schedule',     tileStatus: 'overdue',     rowStatus: 'returned',   isFlagged: true, meta: [{ type: 'due-date', date: '04/01/2025' }, { type: 'comments', count: 2 }, { type: 'documents', count: 11 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'ac5', sectionId: 'accrued',  order: 97, title: 'Customer Deposits Listing',            description: 'Detail of advance payments and customer deposits received and held at period end',           tileStatus: 'fulfilled',   rowStatus: 'accepted',   meta: [{ type: 'due-date', date: '04/08/2025' }, { type: 'documents', count: 23 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },

  // ─── Leases & ROU Assets ─────────────────────────────────────────────────
  { id: 'ls1', sectionId: 'leases',   order: 98,  title: 'Lease Inventory & Classification',   description: 'Complete lease population with operating versus finance classification under ASC 842',       tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 5 files', meta: [{ type: 'e-signature' }, { type: 'due-date', date: '04/11/2025' }, { type: 'documents', count: 37 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'ls2', sectionId: 'leases',   order: 99,  title: 'ROU Asset & Lease Liability Schedule', description: 'Amortization table and rollforward of right-of-use assets and corresponding lease liabilities', tileStatus: 'outstanding', rowStatus: 'fulfilled', attachmentLabel: 'Firm provided 3 files', meta: [{ type: 'due-date', date: '04/22/2025' }, { type: 'documents', count: 29 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'ls3', sectionId: 'leases',   order: 100, title: 'Lease Amendments & Modifications',   description: 'Executed lease modification agreements and corresponding remeasurement calculations',         tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ls4', sectionId: 'leases',   order: 101, title: 'Variable Lease Payment Analysis',    description: 'Analysis of variable payments excluded from lease liability measurement at commencement',    tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ls5', sectionId: 'leases',   order: 102, title: 'Sublease Income Detail',             description: 'Sublease agreements and income schedule for all space sublet to third-party tenants',        tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Goodwill & Intangibles ──────────────────────────────────────────────
  { id: 'gw1', sectionId: 'goodwill', order: 103, title: 'Goodwill Impairment Assessment',      description: 'Step 1 quantitative impairment test and fair value analysis for each reporting unit',       tileStatus: 'outstanding', rowStatus: 'fulfilled',  isFlagged: true, meta: [{ type: 'due-date', date: '04/18/2025' }, { type: 'comments', count: 3 }] },
  { id: 'gw2', sectionId: 'goodwill', order: 104, title: 'Intangible Asset Rollforward',        description: 'Rollforward of all identified intangible assets including additions and amortization detail', tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'gw3', sectionId: 'goodwill', order: 105, title: 'Amortization Schedule — Intangibles', description: 'Asset-level amortization schedule projected through the end of each remaining useful life',  tileStatus: 'fulfilled',   rowStatus: 'accepted',   meta: [{ type: 'due-date', date: '04/15/2025' }, { type: 'documents', count: 19 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'gw4', sectionId: 'goodwill', order: 106, title: 'Business Combination Documentation',  description: 'Purchase price allocation workpaper, valuation reports, and acquisition agreements',        tileStatus: 'overdue',     rowStatus: 'returned',   isFlagged: true, meta: [{ type: 'due-date', date: '04/01/2025' }] },
  { id: 'gw5', sectionId: 'goodwill', order: 107, title: 'Valuation Report — Acquired Assets',  description: 'Third-party appraisal report supporting fair values assigned to assets acquired in business combinations', tileStatus: 'not-started', rowStatus: 'outstanding' },

  // ─── Intercompany Transactions ───────────────────────────────────────────
  { id: 'ic1', sectionId: 'interco',  order: 108, title: 'Intercompany Eliminations Schedule',  description: 'Intercompany receivables, payables, and revenue transactions eliminated in consolidation',  tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ic2', sectionId: 'interco',  order: 109, title: 'Related Party Disclosure Listing',    description: 'All related party relationships and transaction disclosures required in the footnotes',      tileStatus: 'outstanding', rowStatus: 'fulfilled',  meta: [{ type: 'due-date', date: '04/18/2025' }, { type: 'documents', count: 33 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'ic3', sectionId: 'interco',  order: 110, title: 'Management Fee Agreements',           description: 'Inter-entity management fee agreements with amounts charged and eliminated during the year', tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ic4', sectionId: 'interco',  order: 111, title: 'Intercompany Loan Agreements',        description: 'All inter-entity loan agreements with outstanding balances and stated interest terms',       tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 4 files', meta: [{ type: 'e-signature' }, { type: 'due-date', date: '04/13/2025' }, { type: 'documents', count: 13 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },

  // ─── Insurance ───────────────────────────────────────────────────────────
  { id: 'ins1', sectionId: 'insurance', order: 112, title: 'Insurance Binders — All Policies',  description: 'Current coverage binders for all insurance policies maintained by the entity',              tileStatus: 'fulfilled',   rowStatus: 'accepted',   attachmentLabel: 'Firm provided 6 files', meta: [{ type: 'due-date', date: '03/28/2025' }, { type: 'documents', count: 6 }, { type: 'assignee', initials: 'MK', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' }] },
  { id: 'ins2', sectionId: 'insurance', order: 113, title: 'Directors & Officers Policy',        description: 'D&O liability policy with coverage limits, exclusions, and named insured detail',          tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ins3', sectionId: 'insurance', order: 114, title: 'General Liability Certificate',      description: 'Certificate of insurance for general liability coverage with carrier and limit detail',     tileStatus: 'not-started', rowStatus: 'outstanding' },
  { id: 'ins4', sectionId: 'insurance', order: 115, title: 'Workers Compensation Policy',        description: 'Workers compensation policy documentation and current experience modification rate factor',  tileStatus: 'outstanding', rowStatus: 'fulfilled',  attachmentLabel: 'Firm provided 2 files', meta: [{ type: 'due-date', date: '04/25/2025' }, { type: 'documents', count: 24 }, { type: 'assignee', initials: 'GS', color: 'var(--color-status-purple-avatar-bg)', textColor: 'var(--color-status-purple-fg)' }] },
  { id: 'ins5', sectionId: 'insurance', order: 116, title: 'Cyber Liability Insurance Policy',   description: 'Cyber liability policy with coverage limits, sublimits, retention amounts, and exclusions', tileStatus: 'not-started', rowStatus: 'outstanding' },
];

// Derived nav sections — stay in sync with accordion automatically
const statusNavSections: RequestSection[] = SECTION_DEFS.map(({ id, navLabel }) => ({
  id,
  label: navLabel,
  requests: ALL_REQUESTS
    .filter(r => r.sectionId === id)
    .map(r => ({ id: r.id, title: r.title, status: r.tileStatus, isFlagged: r.isFlagged })),
}));

const mockFiles = [
  { id: 'f1', name: 'Purchase_Order.pdf',        sizeKb: 158,  uploadedBy: 'Gerardo Sumano', uploadedAt: '01/31/25', type: 'pdf'   as const, dot: 'unread'    as const },
  { id: 'f2', name: 'Financial_Report_Q4.pdf',   sizeKb: 2048, uploadedBy: 'Gerardo Sumano', uploadedAt: '01/31/25', type: 'pdf'   as const },
  { id: 'f3', name: 'Lease_Agreement.pdf',        sizeKb: 512,  uploadedBy: 'Jenny Staggs',   uploadedAt: '12/15/24', type: 'pdf'   as const, dot: 'attention' as const },
  { id: 'f4', name: 'Expense_Report.xlsx',        sizeKb: 88,   uploadedBy: 'Guy Hawkins',    uploadedAt: '12/31/24', type: 'excel' as const },
];

const mockComments = [
  {
    id: 't1',
    items: [
      { id: 'c1', authorName: 'Herald Black',   authorInitials: 'HB', authorVariant: 'client' as const, timestamp: '2024-11-04T22:10:00', fileReference: 'Lease_Agreement_VelociTech_Solutions_Inc.pdf p12', text: 'What steps are taken to make sure that the building is securely closed and locked after hours?', isUnread: true },
      { id: 'c2', authorName: 'Lorin Taylor',   authorInitials: 'LT', authorVariant: 'firm'   as const, timestamp: '2024-11-03T21:10:00', text: 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.' },
      { id: 'c3', authorName: 'Eric Brooks',    authorInitials: 'EB', authorVariant: 'client' as const, timestamp: '2024-11-02T20:10:00', text: 'What steps are taken to make sure that the building is securely closed and locked after hours?' },
    ],
  },
  {
    id: 't2',
    items: [
      { id: 'c4', authorName: 'Jenny Staggs',   authorInitials: 'JS', authorVariant: 'firm'   as const, timestamp: '2024-11-05T09:55:00', fileReference: 'Lease_Agreement_VelociTech_Solutions_Inc.pdf p62', text: 'We ensure compliance by requiring access cards for after-hours entry to the facility.', isUnread: true },
      { id: 'c5', authorName: 'Amillia Fenton', authorInitials: 'AF', authorVariant: 'client' as const, timestamp: '2024-11-05T09:59:00', text: 'We ensure compliance by requiring access cards for after-hours entry.' },
    ],
  },
];

const mockHistory = [
  { id: 'h1', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'changed status to Accepted',   timestamp: '2024-11-05T08:00:00' },
  { id: 'h2', actorName: 'Jenny Staggs',   actorInitials: 'JS', action: 'uploaded Purchase_Order.pdf',  timestamp: '2024-11-05T07:00:00' },
  { id: 'h3', actorName: 'Gerardo Sumano', actorInitials: 'GS', action: 'added comment',                timestamp: '2024-11-04T10:00:00' },
  { id: 'h4', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'assigned to Amillia Fenton',   timestamp: '2024-11-03T10:00:00' },
  { id: 'h5', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'created this request',         timestamp: '2024-11-02T10:00:00' },
];

// ─── Sub-components ──────────────────────────────────────────────────────────


const SORT_OPTIONS = ['Due Date', 'Priority', 'Created', 'Alphabetical'];

// Use CSS custom properties so colors respond to dark mode via semantic.ts
const FILTER_SWATCHES = [
  { key: 'not-started', color: 'var(--color-tile-not-started)', label: 'Outstanding' },
  { key: 'outstanding', color: 'var(--color-tile-outstanding)',  label: 'Fulfilled'   },
  { key: 'fulfilled',   color: 'var(--color-tile-fulfilled)',    label: 'Accepted'    },
  { key: 'overdue',     color: 'var(--color-tile-overdue)',      label: 'Returned'    },
];

function ListToolbar({
  search, onSearch,
  activeFilters, onToggleFilter,
  flagFilter, onToggleFlagFilter,
  assigneeFilter, onToggleAssigneeFilter,
}: {
  search: string; onSearch: (v: string) => void;
  activeFilters: Set<string>; onToggleFilter: (key: string) => void;
  flagFilter: boolean; onToggleFlagFilter: () => void;
  assigneeFilter: boolean; onToggleAssigneeFilter: () => void;
}) {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState('Due Date');

  const left = (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <Checkbox />
        <ChevronDownIcon size={15} className="text-fg-primary" />
      </div>
      <Search
        value={search}
        onChange={onSearch}
        onClear={() => onSearch('')}
        placeholder="Search"
      />
      <Button variant="secondary" size="xs" startIcon={<PlusIcon size={iconSize.xs} />}>
        <span className="hidden lg:inline">Create category</span>
      </Button>
      <Button variant="secondary" size="xs" startIcon={<PlusIcon size={iconSize.xs} />}>
        <span className="hidden lg:inline">Create request</span>
      </Button>
    </div>
  );

  const right = (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-body-md text-fg-primary">Filters:</span>
        <div className="flex items-center gap-2">
          {FILTER_SWATCHES.map(({ key, color, label }) => (
            <FilterSwatch
              key={key}
              color={color}
              label={label}
              active={activeFilters.has(key)}
              onClick={() => onToggleFilter(key)}
            />
          ))}
        </div>
      </div>
      <div className="h-[26px] w-px bg-line-strong" />
      <div className="flex items-center gap-1">
        <Tooltip content="Filter by assignee">
          <button
            onClick={onToggleAssigneeFilter}
            className={clsx(
              'flex h-8 w-8 items-center justify-center rounded-pill transition-colors',
              assigneeFilter ? 'bg-surface ring-2 ring-action-primary' : 'hover:bg-surface',
            )}
          >
            <Avatar size="xs" initials="A" style={{ backgroundColor: 'var(--color-status-orange-surface)', color: 'var(--color-status-orange-fg)' }} />
          </button>
        </Tooltip>
        <Tooltip content="High priority">
          <button
            onClick={onToggleFlagFilter}
            className={clsx(
              'flex h-8 w-8 items-center justify-center rounded-pill transition-colors',
              flagFilter ? 'bg-surface ring-2 ring-action-primary' : 'hover:bg-surface',
            )}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-pill bg-status-purple-avatar-bg text-status-purple-fg">
              <Flag02Icon size={14} />
            </span>
          </button>
        </Tooltip>
      </div>
      <Dropdown
        open={sortOpen}
        onOpenChange={setSortOpen}
        label="Sort:"
        labelPosition="left"
        width="auto"
        align="right"
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={<ChevronDownIcon size={14} className={`text-fg-muted transition-transform ${sortOpen ? 'rotate-180' : ''}`} />}
          >
            {sortValue}
          </Button>
        }
      >
        <ActionMenu
          size="sm"
          groups={[{
            items: SORT_OPTIONS.map((item) => ({
              label: item,
              selected: item === sortValue,
              onClick: () => { setSortValue(item); setSortOpen(false); },
            })),
          }]}
        />
      </Dropdown>
    </div>
  );

  return (
    <SubToolbar
      className="sticky top-0 z-30"
      left={left}
      right={right}
    />
  );
}

// ─── Stories ─────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Layout/EngagementLayout',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selectedId, setSelectedId] = useState('g3');
    const [activeNav, setActiveNav] = useState('engagements');
    const [activeFilters, setActiveFilters] = useState<Set<string>>(
      new Set(['not-started', 'outstanding', 'fulfilled', 'overdue'])
    );
    const [flagFilter, setFlagFilter] = useState(false);
    const [assigneeFilter, setAssigneeFilter] = useState(false);

    const toggleFilter = (key: string) =>
      setActiveFilters((prev) => {
        const next = new Set(prev);
        next.has(key) ? next.delete(key) : next.add(key);
        return next;
      });

    const selectedRequest = ALL_REQUESTS.find(r => r.id === selectedId) ?? ALL_REQUESTS[2];

    const items = navItems(activeNav).map((item) => ({
      ...item,
      onClick: () => setActiveNav(item.id),
    }));

    return (
      <div className="flex flex-col h-screen overflow-hidden bg-canvas">
        {/* 1. Top nav */}
        <TopNav logo={<SuralinkLogo />} items={items} />

        {/* 2. Engagement header */}
        <EngagementHeader
          firmName="Hargrove & Ellis LLP"
          clientName="Meridian Pacific Holdings"
          engagementId="ENG-2025-0142"
          engagementName="FY2025 Financial Statement Audit"
          activityCount={4}
        />

        {/* 3. Request status color nav */}
        <RequestStatusColorNav
          sections={statusNavSections.map(section => ({
            ...section,
            requests: section.requests.filter(r => {
              const req = ALL_REQUESTS.find(a => a.id === r.id);
              if (!req) return true;
              if (!activeFilters.has(req.tileStatus)) return false;
              if (flagFilter && !req.isFlagged) return false;
              if (assigneeFilter && !(req.meta ?? []).some(m => m.type === 'assignee')) return false;
              return true;
            }),
          }))}
          activeId={selectedId}
          onRequestClick={setSelectedId}
        />

        {/* 4. Full-width toolbar above master-detail split */}
        <ListToolbar
          search={search}
          onSearch={setSearch}
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
          flagFilter={flagFilter}
          onToggleFlagFilter={() => setFlagFilter(v => !v)}
          assigneeFilter={assigneeFilter}
          onToggleAssigneeFilter={() => setAssigneeFilter(v => !v)}
        />

        {/* 5. Master-detail split */}
        <div className="flex-1 overflow-hidden">
          <MasterDetailLayout
            listDefaultSize={60}
            detailDefaultSize={40}
            listMinSize={30}
            list={
              <div className="bg-surface">
                <Accordion>
                  {SECTION_DEFS.map(({ id, title }) => (
                    <AccordionItem
                      key={id}
                      title={title}
                      defaultOpen
                      size="md"
                      sticky
                      stickyTop="top-0"
                      surface
                    >
                      {ALL_REQUESTS.filter(r => {
                        if (r.sectionId !== id) return false;
                        if (!activeFilters.has(r.tileStatus)) return false;
                        if (flagFilter && !r.isFlagged) return false;
                        if (assigneeFilter && !(r.meta ?? []).some(m => m.type === 'assignee')) return false;
                        return true;
                      }).map((r) => (
                        <RequestRow
                          key={r.id}
                          orderNumber={r.order}
                          title={r.title}
                          status={r.rowStatus}
                          attachmentLabel={r.attachmentLabel ?? (r.tileStatus !== 'not-started' ? `Firm provided ${(r.order % 8) + 1} file${(r.order % 8) + 1 !== 1 ? 's' : ''}` : undefined)}
                          description={r.description}
                          meta={(() => {
                            const ORDER = ['e-signature', 'assignee', 'due-date', 'comments', 'documents', 'flag'];
                            const base = (r.meta ?? []).filter(m => m.type !== 'flag');
                            const withFlag = r.isFlagged ? [...base, { type: 'flag' as const }] : base;
                            return [...withFlag].sort((a, b) => ORDER.indexOf(a.type) - ORDER.indexOf(b.type));
                          })()}
                          selected={selectedId === r.id}
                          onClick={() => setSelectedId(r.id)}
                        />
                      ))}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            }
            detail={
              <RequestDetail
                orderNumber={selectedRequest.order}
                title={selectedRequest.title}
                description={selectedRequest.description}
                status={selectedRequest.rowStatus}
                createdBy="Jake Allsop"
                dueDate="Thu, Apr 16"
                priority={selectedRequest.isFlagged ? 'high' : null}
                clientAssignees={[{ initials: 'GS', name: 'Gerardo Sumano', email: 'gerardo@client.com', type: 'client' }]}
                firmAssignees={[{ initials: 'JA', name: 'Jake Allsop', email: 'jake@firm.com', type: 'firm' }]}
                files={mockFiles}
                comments={mockComments}
                commentCount={4}
                historyItems={mockHistory}
                onPreviewFile={(id) => alert(`Preview file: ${id}`)}
                onDownloadFiles={(ids) => alert(`Download: ${ids.join(', ')}`)}
                onDeleteFiles={(ids) => alert(`Delete: ${ids.join(', ')}`)}
                onImportFiles={() => alert('Import client files')}
                onComment={(text) => alert(`Comment: ${text}`)}
                onReply={(threadId, text) => alert(`Reply on ${threadId}: ${text}`)}
                onCommentClick={(id) => alert(`Comment clicked: ${id}`)}
                onCommentMenuClick={(id) => alert(`Comment menu: ${id}`)}
                onEdit={() => alert('Edit')}
                onDelete={() => alert('Delete')}
                onMore={() => alert('More')}
              />
            }
          />
        </div>
      </div>
    );
  },
};

export const EmptyState: Story = {
  render: () => {
    const [activeNav, setActiveNav] = useState('engagements');
    const items = navItems(activeNav).map((item) => ({
      ...item,
      onClick: () => setActiveNav(item.id),
    }));

    return (
      <div className="flex flex-col h-screen overflow-hidden bg-canvas">
        <TopNav logo={<SuralinkLogo />} items={items} />
        <EngagementHeader
          firmName="Acme Corp"
          clientName="Acme Corp"
          engagementId="ENG-2024-001"
          engagementName="Q4 Financial Audit"
        />
        <RequestStatusColorNav sections={[{ id: 'general', label: 'General', requests: [] }]} />
        <div className="flex-1 overflow-hidden">
          <MasterDetailLayout
            listDefaultSize={60}
            detailDefaultSize={40}
            listMinSize={30}
            list={
              <div className="bg-surface">
                <SubToolbar
                  className="sticky top-0 z-20"
                  left={<Search placeholder="Search" className="w-40" />}
                  right={<Button variant="ghost" size="sm" endIcon={<ChevronDownIcon size={iconSize.sm} />}>Due Date</Button>}
                />
                <AccordionItem title="General / Planning" defaultOpen size="sm" sticky stickyTop="top-0">
                <div className="flex items-center justify-center py-16">
                  <p className="text-body-sm text-fg-muted">No requests yet</p>
                </div>
                </AccordionItem>
              </div>
            }
            detail={
              <RequestDetail
                orderNumber={1}
                title="New Request"
                status={undefined}
                createdBy="Jake Allsop"
                dueDate="Thu, Apr 16"
              />
            }
          />
        </div>
      </div>
    );
  },
};
