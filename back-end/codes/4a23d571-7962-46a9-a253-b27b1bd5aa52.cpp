#include <bits/stdc++.h>
using namespace std;
void r(string s, int start, int end)
{
    while (start < end)
    {
        string temp = s[start]; 
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    } 
}     
int main() 
{
 int n;
 string s;
cin>>n;
 cin>>s;

 r(s,0,n-1);
 cout<<s;
 return 0;
}